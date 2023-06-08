import { Controller } from "react-hook-form"
import PaginationCustom from "."

type Props = {
    control: any
    name: string
    totalPages?: number
}

export const FormPaginationCustom: React.FC<Props> = ({ control, name, totalPages = 1 }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, onBlur, value, name, ref },
            }) => (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "right",
                        padding: "16px 24px",
                        backgroundColor: "#ffffff",
                        borderTop: "1px solid #eeeeee",
                    }}
                >
                    <PaginationCustom
                        page={value + 1}
                        setPage={(page) => onChange(page - 1)}
                        totalPages={totalPages}
                    />
                </div>
            )} />
    )
}