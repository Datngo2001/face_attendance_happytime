import { Controller } from "react-hook-form"
import PaginationCustom from "."

export type Props = {
    control: any
    name: string
}

export const FormPaginationCustom: React.FC<Props> = ({ control, name }) => {
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
                        page={value}
                        setPage={(page) => onChange(page)}
                        totalPages={1}
                    />
                </div>
            )} />
    )
}