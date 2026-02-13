import http.server
import socketserver
import webbrowser
import os

# Change to the directory where the script is located
os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers to allow local file access
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

Handler = MyHTTPRequestHandler

print(f"🎉 Starting Valentine's Day website server...")
print(f"🌐 Server running at: http://localhost:{PORT}")
print(f"💝 Open your browser and visit: http://localhost:{PORT}")
print(f"\n⏹️  Press Ctrl+C to stop the server\n")

# Automatically open browser
webbrowser.open(f'http://localhost:{PORT}')

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
