'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Home = () => {
  const amazonLink = 'https://www.amazon.com/example-product';
  return (
    <div>
      <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Link" />
      <Button type="submit">Subscribe</Button>
    </div>
    </div>
  );
};

export default Home;
