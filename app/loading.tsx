import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-white" size="2x" />
      </div>
    </div>
  );
}
