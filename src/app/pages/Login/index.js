'use client'
import Animation from '@/app/components/animation'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import '../../page.module.css'
import CustomTextField from '@/app/components/customField'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button } from '@mui/material'
import Link from 'next/link'

const Login = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
            setInputValue((v) => v + "\n");
        } else if (e.key === "Enter") {
            onSubmit();
        }
    };
    return (
        <>
            {isClient ?
                <>
                <Animation />
                <Box sx={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff",display:'flex', flexDirection:'column' }}>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Image src="/img/logo.webp" width={50} height={50} />
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Image src="/img/logo-texte.webp" width={200} height={60} />
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center"
                        sx={{ marginTop: "40px" }}
                    >
                        <h3>IDENTIFY YOURSELF</h3>
                    </Box>
                    <Box display="flex"
                        sx={{ backgroundColor: "#780200 ", padding: "4px", margin: "8px 0px" }}
                    >
                        <EmailOutlinedIcon sx={{ margin: "6px", }} />
                        <CustomTextField
                            type="email"
                            placeholder="E-mail Address"
                            onKeyDown={handleKeyDown} />
                    </Box>
                    <Box display="flex"
                        sx={{ backgroundColor: "#780200 ", padding: "4px", margin: "8px 0px" }}
                    >
                        <LockOutlinedIcon sx={{ margin: "6px", }} />
                        <CustomTextField
                            type="password"
                            placeholder="Password"
                            onKeyDown={handleKeyDown} />
                    </Box>


                    <Box display="flex" alignItems="center" justifyContent="center"
                        sx={{ marginTop: "20px" }}
                    >
                        <Link href="/">
                            <h5>Forgot Your Password</h5>
                        </Link>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center"
                    >
                        <Button variant="contained"
                            sx={{
                                backgroundColor: "#780200 ",
                                marginTop: "24px",
                                '&:hover': {
                                    backgroundColor: '#920200',
                                },
                            }}
                        >Unlock
                        </Button>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center"
                        sx={{ marginTop: "32px" }}
                    >
                        <Button variant="contained"
                            sx={{
                                backgroundColor: "#222",
                                color: "#aeaeae",
                                marginTop: "32px",
                                '&:hover': {
                                    backgroundColor: '#2f2f2f',
                                },
                            }}
                        >CREATE A NEW PROFILE
                        </Button>
                    </Box>
                   
                </Box>
                <Box
                        sx={{
                            position:'absolute',
                            bottom: '20px',
                            right: '20px',
                            display:'flex',
                            
                            '@media (max-width: 767px)': {
                               bottom:"100px",
                               right:"120px"
                            },
                        }}
                    >
                        <Link href="#">
                            <p style={{ color: '#fff', textDecoration: 'underline', fontSize: '10px',
                            }}>Term of use</p>
                        </Link>
                        <Link href="#">
                            <p style={{ color: '#fff', textDecoration: 'underline' ,fontSize: '10px',marginLeft:"12px"}}>Privacy policy</p>
                        </Link>

                    </Box>
                </>
                    :null
            }

                </>
    )
}

            export default Login