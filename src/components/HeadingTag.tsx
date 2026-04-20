export default function HeadingTag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="text-[#dc2f02] leading-normal font-medium">
      {children}
    </span>
  );
}
