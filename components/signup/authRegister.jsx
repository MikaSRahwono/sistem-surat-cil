import { db, auth } from '@/lib/firebase/initFirebase'
import { doc, setDoc } from "firebase/firestore"
import { Button } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { initFirebase } from '@/lib/firebase/initFirebase'

const WriteToCloudFirestore = (npm, nama, fakultas, jurusan, tahun_masuk, tahun_lulus, email_ui) => {
    initFirebase()

    const registerUser = async () => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        try {
            const userDoc = doc(db, "users", npm)
            await setDoc(userDoc, {
                npm: npm,
                nama: nama,
                fakultas: fakultas,
                jurusan:  jurusan,
                tahun_masuk: tahun_masuk,
                tahun_lulus: tahun_lulus,
                email_ui: email_ui,
            })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <div style={{ margin: '5px 0' }}>
            <Button onClick={registerUser}>Register</Button>
        </div>
    )
}

export default WriteToCloudFirestore