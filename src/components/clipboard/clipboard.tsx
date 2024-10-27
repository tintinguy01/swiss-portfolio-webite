"use client";

import { Clipboard } from "flowbite-react";
import './clipboard.styles.scss'; // Import the SCSS styles

interface ClipboardButtonProps {
  valueToCopy: string; // Prop for the value to copy
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({ valueToCopy }) => {
  return (
    <div className="clipboard-container">
      <div className="clipboard-relative">
        <input
          type="text"
          className="clipboard-input"
          value={valueToCopy}
          disabled
          readOnly
        />
        <Clipboard.WithIcon className="clipboard-icon" valueToCopy={valueToCopy} />
      </div>
    </div>
  );
};

export default ClipboardButton;
