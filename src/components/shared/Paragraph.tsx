interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ className = "", children }: ParagraphProps) => {
  return <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>;
};
