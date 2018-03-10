// Utility for decoding JWT token
import decode from "jwt-decode";

export default (token) => {
  const decoded = decode(token);
  return decoded;
};
