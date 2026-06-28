import Image from 'next/image';

export const LogoTextComponent = () => {
  return (
    <Image
      src="/postu-logo.png"
      alt="Postu"
      width={298}
      height={109}
      priority
      className="h-auto w-[164px]"
    />
  );
};
