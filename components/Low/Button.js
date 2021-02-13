import { Button } from "@geist-ui/react"
export default function CustomButton({ plain, children, ...props }) {
    return <Button {...props} style={{ borderRadius: "100px" }}>{ children }</Button>
}