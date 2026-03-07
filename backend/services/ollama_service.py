import requests

OLLAMA_URL = "https://semicapitalistic-semimountainous-hinam.ngrok-free.dev/api/generate"

def generate_ai_response(user_message):

    prompt = f"""
Give a clear and concise answer in 2–3 lines only.

Question: {user_message}
"""

    payload = {
        "model": "llama3",
        "prompt": prompt,
        "stream": False
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload, timeout=60)

        if response.status_code == 200:
            return response.json().get("response", "").strip()
        else:
            return "AI service error"

    except requests.exceptions.RequestException as e:
        return f"Connection error: {str(e)}"