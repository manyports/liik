import Image from 'next/image';

export default function Footer(){
    return(
        <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image 
            src="/logo.png" 
            alt="JI & K Logo" 
            width={120} 
            height={40}
          />
          <div className="text-white text-sm text-center">
            © 2025, Интернет-бухгалтерия "Li & K"
            <br />
            Специально для MyExtra Competition
          </div>
        </div>
      </div>
    </footer>
    )
}