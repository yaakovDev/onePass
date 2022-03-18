import md5 from 'md5';
import clipboardy from 'clipboardy';


const [ , , ...args ] = process.argv;

const salt = args[0]||''
const password = args[1]
if ( !salt || !password) {
  console.log(`Usage:onePass www.gmail.com mypassword`)
  process.exit();
}

let hashPassword = md5(salt+password)
hashPassword = Buffer.from(hashPassword,"hex").toString('base64')
console.log(`hashPassword-->${hashPassword}`);
clipboardy.writeSync(hashPassword)
  
