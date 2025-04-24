import prismadb from "@/lib/prismadb";
import { BillboardsForm } from "./components/billboard-form";

type Props = {
  params: {
    storeId: string;
    billboardId: string;
  };
};

const BillboardPage = async ({ params }: Props) => {
  const resolvedParams = await params;
  const { billboardId } = resolvedParams;

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
