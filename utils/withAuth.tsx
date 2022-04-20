import { useRouter } from "next/router";
const withAuth = (WrappedComponent: any) => {
    return (props: any) => {
        if (typeof window !== undefined) {
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                const router = useRouter();
                router.replace("/");
                return null;
            }
            return <WrappedComponent {...props}/>
        }
        return null;
    };
};

export default withAuth;