import os
import json
from shutil import copyfile

# Define the input and output directories
raw_dir = "raw"
data_dir = "site/data"

print(f"Running data manipulator script...")

# Ensure the output directory exists
if not os.path.exists(data_dir):
    os.makedirs(data_dir)

# Get a list of all JSON files in the raw directory
json_files = [f for f in os.listdir(raw_dir) if f.endswith(".json")]

# Iterate over each JSON file
for json_file in json_files:
    with open(os.path.join(raw_dir, json_file), "r") as f:
        data = json.load(f)
        
        # Extract the desired fields
        extracted_data = {
            "artist_name": data.get("metadata", {}).get("attributes", [{}])[0].get("value", ""),
            "meme_name": data.get("title", ""),
            "description": data.get("description", ""),
            "token_id": data.get("id", {}).get("tokenId", ""),
            "image_url": data.get("metadata", {}).get("image", ""),
            "thumbnail": data.get("media", [{}])[0].get("thumbnail", "")
        }
        
        # Save the extracted data to a new JSON file in the data directory
        output_file = os.path.join(data_dir, json_file)
        with open(output_file, "w") as out_f:
            json.dump(extracted_data, out_f, indent=4)
        
        print(f"Extracted data saved to: {output_file}")
