import type { ErrorMessageType } from "./form.type";

function ErrorMessage({error}:ErrorMessageType) {
    return ( 
        <p className="text-red-500 text-xs mt-1">{error}</p>
     );
}

export default ErrorMessage;