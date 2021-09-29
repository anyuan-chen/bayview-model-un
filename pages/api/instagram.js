// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await fetch("https://api.instagram.com/oauth/access_token", {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            
        })
    })
  }
    
}
