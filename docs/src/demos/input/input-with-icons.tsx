import { Input, InputIcon } from "@9ui/ui";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import { useState } from "react";

export default function InputWithIcons() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const passwordType = isPasswordVisible ? "text" : "password";
  const eyeIcon = isPasswordVisible ? <EyeIcon /> : <EyeOffIcon />;

  return (
    <Input placeholder="Password" className="w-80" type={passwordType}>
      <InputIcon side="leading">
        <LockIcon />
      </InputIcon>
      <InputIcon
        side="trailing"
        className="cursor-pointer transition-colors duration-200 hover:[&>svg]:text-foreground"
        onClick={togglePasswordVisibility}
      >
        {eyeIcon}
      </InputIcon>
    </Input>
  );
}
