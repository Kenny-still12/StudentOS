import { ssrExportNameKey } from "vite/module-runner";

export default function Logo() {
    return (
        <span className="font-wordmark text-2xl font-medium">
            <span className="text-green-500">Gaku</span>
            <span className="text-neutral-500">Registre</span>
        </span>
    )
}