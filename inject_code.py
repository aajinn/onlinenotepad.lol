import os

# Define the HTML code to be injected
injection_code = """
<link
      rel="apple-touch-icon"
      sizes="180x180"
      href="../apple-touch-icon.png"
/>
<link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../favicon-32x32.png"
/>
<link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../favicon-16x16.png"
/>
<link rel="manifest" href="../site.webmanifest" />
"""

# Function to inject code into HTML files
def inject_code_into_html_files(directory):
    # Walk through the specified directory
    for filename in os.listdir(directory):
        if filename.endswith('.html'):
            file_path = os.path.join(directory, filename)
            
            # Read the content of the HTML file
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                
            # Check if <head> tag exists and inject code before </head>
            if '<head>' in content:
                updated_content = content.replace('</head>', injection_code + '\n</head>')
                
                # Write the updated content back to the file
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(updated_content)
                print(f'Injected code into {filename}')
            else:
                print(f'No <head> tag found in {filename}')

# Specify the directory containing the HTML files
html_directory = 'blog'

# Run the function to inject code
inject_code_into_html_files(html_directory)
