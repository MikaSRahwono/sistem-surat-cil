import { Select } from "@chakra-ui/react"

export const Jurusan = (props) => {
    const fakultas = props.fakultas
    if (fakultas == "Fakultas Kedokteran") {
        return (
            <Select id="jurusan-fk" name="jurusan-fk">
                <option value="Ilmu Kedokteran">Ilmu Kedokteran</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Kedokteran Gigi") {
        return (
            <Select id="jurusan-fkg" name="jurusan-fkg">
                <option value="Kedokteran Gigi">Kedokteran Gigi</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Kesehatan Masyarakat") {
        return (
            <Select id="jurusan-fkm" name="jurusan-fkm">
                <option value="Gizi">Gizi</option>
                <option value="Kesehatan Lingkungan">Kesehatan Lingkungan</option>
                <option value="Keselamatan dan Kesehatan Kerja">Keselamatan dan Kesehatan Kerja</option>
                <option value="Kesehatan Masyarakat">Kesehatan Masyarakat</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Farmasi") {
        return (
            <Select id="jurusan-ff" name="jurusan-ff">
                <option value="Ilmu Farmasi">Ilmu Farmasi</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Ilmu Keperawatan") {
        return (
            <Select id="jurusan-fik" name="jurusan-fik">
                <option value="Ilmu Keperawatan">Ilmu Keperawatan</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Psikologi") {
        return (
            <Select id="jurusan-psiko" name="jurusan-psiko">
                <option value="Psikologi">Psikologi</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Matematika dan Ilmu Pengetahuan Alam") {
        return (
            <Select id="jurusan-fmipa" name="jurusan-fmipa">
                <option value="Matematika">Matematika</option>
                <option value="Kimia">Kimia</option>
                <option value="Fisika">Fisika</option>
                <option value="Biologi">Biologi</option>
                <option value="Geografi">Geografi</option>
                <option value="Geofisika">Geofisika</option>
                <option value="Geologi">Geologi</option>
                <option value="Statistika">Statistika</option>
                <option value="Aktuaria">Aktuaria</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Ilmu Komputer") {
        return (
            <Select id="jurusan-fasilkom" name="jurusan-fasilkom">
                <option value="Ilmu Komputer">Ilmu Komputer</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Teknik") {
        return (
            <Select id="jurusan-ft" name="jurusan-ft">
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Teknik Lingkungan">Teknik Lingkungan</option>
                <option value="Teknik Mesin">Teknik Mesin</option>
                <option value="Teknik Perkapalan">Teknik Perkapalan</option>
                <option value="Teknik Elektro">Teknik Elektro</option>
                <option value="Teknik Komputer">Teknik Komputer</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Teknik Metalurgi dan Material">Teknik Metalurgi dan Material</option>
                <option value="Arsitektur Interior">Arsitektur Interior</option>
                <option value="Teknik Kimia">Teknik Kimia</option>
                <option value="Teknik Bioproses">Teknik Bioproses</option>
                <option value="Teknik Industri">Teknik Industri</option>
                <option value="Teknik Biomedik">Teknik Biomedik</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Hukum") {
        return (
            <Select id="jurusan-fh" name="jurusan-fh">
                <option value="Ilmu Hukum">Ilmu Hukum</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Ilmu Sosial Ilmu Politik") {
        return (
            <Select id="jurusan-fisip" name="jurusan-fisip">
                <option value="Ilmu Komunikasi">Ilmu Komunikasi</option>
                <option value="Ilmu Politik">Ilmu Politik</option>
                <option value="Kriminologi">Kriminologi</option>
                <option value="Sosiologi">Sosiologi</option>
                <option value="Ilmu Kesejahteraan Sosial">Ilmu Kesejahteraan Sosial</option>
                <option value="Antropologi Sosial">Antropologi Sosial</option>
                <option value="Hubungan Internasional">Hubungan Internasional</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Ilmu Pengetahuan Budaya") {
        return (
            <Select id="jurusan-fib" name="jurusan-fib">
                <option value="Arkeologi">Arkeologi</option>
                <option value="Sejarah">Sejarah</option>
                <option value="Ilmu Filsafat">Ilmu Filsafat</option>
                <option value="Ilmu Perpustakaan">Ilmu Perpustakaan</option>
                <option value="Bahasa dan Kebudayaan Korea">Bahasa dan Kebudayaan Korea</option>
                <option value="Sastra Belanda">Sastra Belanda</option>
                <option value="Sastra Cina">Sastra Cina</option>
                <option value="Sastra Indonesia">Sastra Indonesia</option>
                <option value="Sastra Jawa/Daerah">Sastra Jawa/Daerah</option>
                <option value="Sastra Jepang">Sastra Jepang</option>
                <option value="Sastra Jerman">Sastra Jerman</option>
                <option value="Sastra Inggris">Sastra Inggris</option>
                <option value="Sastra Prancis">Sastra Prancis</option>
                <option value="Sastra Rusia">Sastra Rusia</option>
                <option value="Sastra Arab">Sastra Arab</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Ekonomi Bisnis") {
        return (
            <Select id="jurusan-feb" name="jurusan-feb">
                <option value="Ilmu Ekonomi">Ilmu Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Ilmu Ekonomi Islam">Ilmu Ekonomi Islam</option>
                <option value="Bisnis Islam">Bisnis Islam</option>
            </Select>
        )
    }
    else if (fakultas == "Fakultas Ilmu Administrasi") {
        return (
            <Select id="jurusan-fia" name="jurusan-fia">
                <option value="Ilmu Administrasi Negara">Ilmu Administrasi Negara</option>
                <option value="Ilmu Administrasi Niaga">Ilmu Administrasi Niaga</option>
                <option value="Ilmu Administrasi Fiskal">Ilmu Administrasi Fiskal</option>
            </Select>
        )
    }
    else if (fakultas == "Program Vokasi") {
        return (
            <Select id="jurusan-vokasi" name="jurusan-vokasi">
                <option value="Administrasi Asuransi dan Aktuaria">Administrasi Asuransi dan Aktuaria</option>
                <option value="Administrasi Keuangan dan Perbankan">Administrasi Keuangan dan Perbankan</option>
                <option value="Administrasi Perkantoran dan Sekretari">Administrasi Perkantoran dan Sekretari</option>
                <option value="Administrasi Perpajakan">Administrasi Perpajakan</option>
                <option value="Fisioterapi">Fisioterapi</option>
                <option value="Hubungan Masyarakat">Hubungan Masyarakat</option>
                <option value="Manajemen Informasi dan Dokumentasi">Manajemen Informasi dan Dokumentasi</option>
                <option value="Vokasional Pariwisata">Vokasional Pariwisata</option>
                <option value="Okupasi Terapi">Okupasi Terapi</option>
                <option value="Penyiaran Multimedia">Penyiaran Multimedia</option>
                <option value="Periklanan Kreatif">Periklanan Kreatif</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Perumahsakitan">Administrasi Perumahsakitan</option>
                <option value="Bisnis Kreatif">Bisnis Kreatif</option>
                <option value="Produksi Media">Produksi Media</option>
            </Select>
        )
    }
    else {
        return (
            <Select id="-" name="-">
                <option value="-">-- Pilih Fakultas Terlebih Dahulu --</option>
            </Select>
        )
    }
}