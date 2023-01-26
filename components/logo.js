import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 5px;
    margin-top: 10px
`

const Logo = () => {
    const footPrintImg = `/Logo-CIL-removebg.png`

    return (
        <Link href='/'>
            <LogoBox>
                <Image src={footPrintImg} width={100} height={5} alt='logo'></Image>
            </LogoBox>
        </Link>
    )
}

export default Logo