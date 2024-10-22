<template>
    <div class="login-container">
        <span class="forget-password">Forget password?</span>
        <div class="keep-signed-in">
            <div class="checkbox"></div>
        </div>
        <form @submit.prevent="login" class="login-form">
            <div class="input">
                <input
                    v-model="email"
                    type="email"
                    placeholder="E-mail or mobile phone number"
                    class="input-field"
                    required
                />
            </div>
            <div class="input">
                <input
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    class="input-field"
                    required
                />
            </div>
            <div class="form-buttons">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Logniii',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            console.log('Email:', this.email);
            console.log('Password:', this.password);

            // เพิ่ม logic สำหรับการล็อกอินที่นี่

            // หลังจากล็อกอินสำเร็จให้เปลี่ยนไปยัง HomeN
            this.$router.push('/Home'); // ใช้ this.$router.push() สำหรับ options API
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Center vertically */
    background-color: #f5f5f5; /* Background color */
}

.login-container {
    width: 311px;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    top: 50px;
    z-index: 10;
    
}

.forget-password {
    color: rgba(243, 81, 119, 0.88);
    font-family: Montserrat;
    font-weight: 500;
    font-size: 10px;
    text-align: right;
    margin-top: 10px;
    position: relative;
    top: 138px;
    left: 160px;
}

.input {
    margin-top: 15px;
}

.input-field {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    background-color: #FFC9C9;
    outline: none; /* เอา outline ออก */
}

.input-field:focus {
    border: 2px solid #ff6392; /* เปลี่ยนเป็นสีตามที่ต้องการและลดขนาดขอบ */
    box-shadow: 0 0 5px rgba(255, 99, 146, 0.5); /* เพิ่ม effect เงาให้ดูนุ่มนวล */
}


.form-buttons {
    margin-top: 20px;
    text-align: center;
    position: relative;
    top: 65px;
    left: 10px;
}

button {
    width: 75%;
    padding: 10px;
    background-color: rgba(241, 167, 184, 1);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    position: relative;
    right: 18px;
    cursor: pointer;
}
</style>
