'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/postu-favicon.png"
      alt="Postu"
      width={110}
      height={109}
      priority
      className="mt-[8px] h-[60px] w-[60px] min-w-[60px] object-contain"
    />
  );
};
