import Link from "next/link";

const MyLink = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link
      href={url}
      className="text-subheading font-semibold borealis-text transition-colors duration-150"
      target="_blank"
      rel="noopener noreferrer"
    >
     {text}
    </Link>
  );
};

export default MyLink;
