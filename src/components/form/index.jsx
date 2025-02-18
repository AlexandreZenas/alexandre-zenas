import { FormRoot } from "./root";
import { InputForm } from "./input";
import { SelectForm } from "./select";
import { OptionForm } from "./select/option";
import { TextareaForm } from "./textarea";
import { TextButton } from "./button";

export const Form = {
    Root: FormRoot,
    Input: InputForm,
    Select: SelectForm,
    TextButton: TextButton,
    Option: OptionForm,
    Textarea: TextareaForm
}