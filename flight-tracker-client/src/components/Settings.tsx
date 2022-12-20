import { useState } from "react";
import {
  Box,
  Modal,
} from "@mui/material";

const settingsStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    p: 4,
}

interface ISettingsProps {
    openSettings: boolean;
    setOpenSettings: (openSettings: boolean) => void;
}

const Settings: React.FC<ISettingsProps> = ({openSettings, setOpenSettings}) => {
    const handleCloseSettings = () => setOpenSettings(false);

    return (
        <Modal
            open={openSettings}
            onClose={handleCloseSettings}
        >
            <Box sx={settingsStyle}>
                <button>Default location</button>
                <button>Change units</button>
                <button>Update password</button>
            </Box>
        </Modal>
    )
}

export default Settings