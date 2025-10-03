import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  marketingConsent: boolean;
  timestamp: string;
}

const SPREADSHEET_ID = "1hTebR7iTJvU5VAzkCUE-JZWG-qzu3Rs8SlsELaRtoOI";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    const apiKey = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!apiKey) {
      throw new Error("Google Sheets API key not configured");
    }

    // Prepare data for Google Sheets
    const values = [[
      formData.timestamp,
      formData.name,
      formData.email,
      formData.message,
      formData.marketingConsent ? "Tak" : "Nie"
    ]];

    // Append to Google Sheets
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A:E:append?valueInputOption=USER_ENTERED&key=${apiKey}`;
    
    const response = await fetch(sheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Google Sheets API error:", error);
      throw new Error(`Failed to write to Google Sheets: ${error}`);
    }

    const result = await response.json();
    console.log("Successfully wrote to Google Sheets:", result);

    return new Response(
      JSON.stringify({ success: true, message: "Dane zapisane pomyślnie" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in submit-contact-form function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
