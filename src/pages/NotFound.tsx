import { Button } from "@/components/ui/button";
import { FC } from "react";
import { Link } from "react-router-dom";

const NoMatch: FC = () => {
  return (
    <section>
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-y-5">
        <h1 className="bg-clip-text text-9xl font-bold text-primary">
          404
        </h1>
        <p className="text-3xl font-medium text-neutral">Page not found</p>
        <Link to="/">
          <Button variant="outline">
            Go back
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NoMatch;
