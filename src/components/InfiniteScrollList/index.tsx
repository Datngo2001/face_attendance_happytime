import { ReactNode, useEffect, useRef, useState } from "react"
import "./styles.scss"
import LoadingCustom from "components/LoadingCustom"
import { Divider, List, ListItem } from "@mui/material"
import useThrottle from "hooks/useThrottle"

type Props = {
    height?: string
    renderItem: (item: any) => ReactNode
    handleLoadMore: (page: number, setPage: Function, setListItem: Function, setLoading: Function, setIsHaveMore: Function) => void
}

export const InfiniteScrollList: React.FC<Props> = ({ renderItem, handleLoadMore, height = "300px" }) => {
    const itemListElementRef = useRef<HTMLDivElement>()
    const [loading, setLoading] = useState(false)
    const [listItem, setListItem] = useState([])
    const [page, setPage] = useState(-1)
    const [isHaveMore, setIsHaveMore] = useState(true)

    const handleScroll = useThrottle((e) => {
        if (itemListElementRef.current.scrollTop === itemListElementRef.current.scrollHeight || loading || !isHaveMore) {
            return;
        }
        handleLoadMore(page, setPage, setListItem, setLoading, setIsHaveMore);
    }, 500);

    useEffect(() => {
        handleLoadMore(page, setPage, setListItem, setLoading, setIsHaveMore);
    }, [])

    useEffect(() => {
        itemListElementRef.current.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        <div className="infinite-scroll-list" ref={itemListElementRef} style={{ height: height, overflow: "auto" }}>
            <List className="list">
                {listItem.map((item, index) => (
                    <ListItem key={item._id}>
                        {renderItem(item)}
                    </ListItem>
                ))}
                <div>
                    {loading && <LoadingCustom />}
                </div>
            </List>
        </div>
    )
}