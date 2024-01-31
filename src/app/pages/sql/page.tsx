import styles from './sql.module.scss';

// TODO：怎么写同构的代码


const getData = async () => {
    console.log('==process.env.NODE_ENV', process.env.NODE_ENV)
    const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://react-next-sql-example-git-main-tomorrowisbetters-projects.vercel.app'
    const res = await fetch(`${host}/api/home`)

    if (res.ok) {
        return res.json();
    }
}
const SqlPage = async () => {
    const data = await getData();
    console.log('===data', data);
    return (
        <div className={styles.sql} >
            hello, sql 数据请求
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

export default SqlPage;
