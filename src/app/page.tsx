import Button from "@/components/Button";

const HomePage = () => {
  console.log("Home page rendering");
  return (
    <div>
      <h1 className="text-3xl">Welcome to my Blog</h1>
      
      <Button>Click Me!</Button>
    </div>
  );
};

export default HomePage;
