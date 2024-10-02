import os

# Specify the folder to list files from
folder_path = 'blog'  # Replace with your folder path
# Specify the output file where filenames will be saved
output_file = 'blog_list.txt'  # Replace with your desired output file name

try:
    # Get the list of files in the specified folder
    file_names = os.listdir(folder_path)

    # Write the filenames to the output file
    with open(output_file, 'w') as f:
        for file_name in file_names:
            f.write(file_name + '\n')

    print(f"File names have been written to {output_file}")

except Exception as e:
    print(f"An error occurred: {e}")
