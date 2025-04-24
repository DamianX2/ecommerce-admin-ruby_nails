import prismadb from "@/lib/prismadb";
import { BillboardsForm } from "./components/billboard-form";

interface BillboardPageProps {
  params: Promise<{
    storeId: string;
    billboardId: string;
  }>;
}

const BillboardPage = async ({ params }: BillboardPageProps) => {
  const { billboardId } = await params;

  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardsForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
