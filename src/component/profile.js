import styles from './profile.module.scss'

function profile() {
    return ( 
        <div className={styles.container}>
            <div className={styles.profile}>
                    Profile
                    <img className={styles.avatar} src='https://scontent.fsgn18-1.fna.fbcdn.net/v/t39.30808-1/412912943_2094957970854208_8237656501665238034_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=aCFNYOJS6dsQ7kNvgGAeKvT&_nc_ht=scontent.fsgn18-1.fna&_nc_gid=AUpYA6DrRZ2THpRLdJ9V3PH&oh=00_AYA2wXrGelbBxHK36QKMhLWnwFwNZ3dz74Xef8qmj1Qkrw&oe=66D8B708' alt='avatar'></img>
            </div>
            <div>
                <ul>
                    <li>Họ và tên: Nguyễn Huy Cường</li>
                    <li>MSSV: 21110148</li>
                    <li>Địa chỉ: Tiền Giang</li>
                    <li>Trường: Đại học Sư Phạm Kỹ Thuật TPHCM</li>
                </ul>
            </div>
        </div>
     );
}

export default profile;