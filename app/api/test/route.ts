export async function GET() {
    return Response.json(
        {
         "places": [
            {
            "namn": "Stockholm",
              "country": "Sweden",
            },

            {
              "namn" : "Oslo",
              "country": "Norway",
            },   
                ]  
        });
}