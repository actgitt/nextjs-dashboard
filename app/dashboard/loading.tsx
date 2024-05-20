import DashboardSkeleton from "../ui/skeletons";
import { lusitana } from "../ui/fonts";

export function Loadi() {
    return <p>loading...</p>;
}

export default function Loading() {
    return (
        <>
        <DashboardSkeleton />
        <p className={`${lusitana.className}`}>Loading... Please Wait.</p>
        </>
    );
}
