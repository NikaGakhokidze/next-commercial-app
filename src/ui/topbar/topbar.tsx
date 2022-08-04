import Stack from "@mui/material/Stack"
import Button from "@mui/material/Stack"

export const TopBar = () => {
    return (
        <Stack gap={3} sx={{ flexDirection: "row"}}>
            <Button>Home</Button>
            <Button>Cars</Button>
            <Button>Houses</Button>
            <Button>Clothes</Button>
        </Stack>
    )
}