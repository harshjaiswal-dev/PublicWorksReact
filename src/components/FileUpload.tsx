import React, { useState } from "react";

interface FileUploadProps {
  maxFiles?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({ maxFiles = 3 }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files).slice(0, maxFiles);
      setFiles(selected);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleChange} />
      <div className="flex mt-2 gap-2">
        {files.map((file, idx) => (
          <img key={idx} src={URL.createObjectURL(file)} alt={`Thumbnail${idx}`} className="w-16 h-16 border" />
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
