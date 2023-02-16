require("dotenv").config()
const TelegramBot = require("node-telegram-bot-api")
let orqaga = [];
const bot = new TelegramBot(process.env.TELEGRAM_API_KEY, {polling: true})


bot.on("message", msg => {
    if(msg.text == "🔙 Orqaga"){
        orqaga = orqaga.slice(0, -1);
        msg.text = orqaga.at(-1);
        if (orqaga.length == 0) {
            bot.sendMessage(msg.chat.id, `Assalomu alaykum! ${msg.chat.first_name} botimizga hush kelibsiz 😊`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: "Operatsion tizimlar(OS)"}],
                        [{text: "Arxiv paroli"}],
                        [{text: "🔐 Arxivdan chiqarish qo'llanma"}, {text: "📊 Statistika"}]
                    ],
                    resize_keyboard: true
                })
            })
    }
}

    if(msg.text == "/start" || msg.text == "🔝 Asosiy menu"){
        orqaga = []
        bot.sendMessage(msg.chat.id, `Assalomu alaykum! ${msg.chat.first_name} botimizga hush kelibsiz 😊`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [{text: "Operatsion tizimlar(OS)"}],
                    [{text: "Arxiv paroli"}],
                    [{text: "🔐 Arxivdan chiqarish qo'llanma"}, {text: "📊 Statistika"}]
                ],
                resize_keyboard: true
            })
        })
    }
})
// ================================================================Arxiv paroliga kirish
bot.on("message",  msg => {
    const chatId = msg.chat.id
    if(msg.text == 'Arxiv paroli'){
        bot.sendPhoto(msg.chat.id, './img/Parol.png', {
            caption: `<strong>Arxiv paroli rasmda ko'rsatilgan 😊</strong>`,
            parse_mode: "HTML"
        })
    }
})
// ================================================================Arxivdan chiqarish qo'llanmaga kirish
bot.on("message",  msg => {
    const chatId = msg.chat.id
    if(msg.text == "🔐 Arxivdan chiqarish qo'llanma"){
        bot.sendPhoto(msg.chat.id, "./img/arxiv_qo'llanma.png", {
            caption: `<strong>Ko'p faylli arxivlarni arxivdan chiqarish uchun qo'llanma !!!</strong>`,
            parse_mode: "HTML"
        })
    }
})
// ================================================================ Statistikaga kirish
bot.on("message",  msg => {
    const chatId = msg.chat.id
    if(msg.text == "📊 Statistika"){
        bot.sendMessage(msg.chat.id, `👩‍👩‍👧‍👦 Botdagi obunachilar: 26904 ta,
🔜 Oxirgi 24 soatda: 20 ta obynachi qo'shildi,
🔝 Oxirgi 1 oyda: 245 ta obunachi qo'shildi,
📆 Bot ishga tushganiga: 586 kun bo'ldi,
📊 @UsefulOS_bot statistikasi`);
    }
})
// ====================================================================== Operatsion tizimlarga kirish
bot.on("message",  msg => {
    const chatId = msg.chat.id
    if(msg.text == 'Operatsion tizimlar(OS)'){
        if(orqaga.at(-1) != msg.text){
            orqaga.push(msg.text)
        }
        bot.sendMessage(chatId, 'Operatsion tizimlar (OS)', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [{text: 'Windows'}, {text: 'Linux'}],
                    [{text: 'Mac OS'}],
                    [{text: 'Android OS'}],
                    [{text: '🔙 Orqaga'}, {text: '🔝 Asosiy menu'}]
                ],
                resize_keyboard: true
            })
        })
    }
})
    // ================================================================ Linux OSga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Linux'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Linux', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Ubuntu'}, {text: 'Kali'}],
                        [{text: 'PureOs'}, {text: 'Debian'}],
                        [{text: 'CentOS'}, {text: 'Puppy'}, {text: 'BlackLab'}],
                        [{text: 'BansenLabs'}],
                        [{text: 'Arch Linux'}, {text: 'Slackware'}, {text: 'Solus'}],
                        [{text: 'Bodhi Linux'}, {text: 'Xubuntu'}],
                        [{text: 'Fedora'}],
                        [{text: 'Zorin Linux'}, {text: 'PCLinuxOS'}],
                        [{text: '🔙 Orqaga'}, {text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Ubuntu'){
            bot.sendPhoto(msg.chat.id, 'https://imageio.forbes.com/blogs-images/jasonevangelho/files/2018/07/ubuntu-logo.jpg?format=jpg&width=1200');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Ubuntu-21.04.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Ubuntu-21.04.part2.zip');
        }
        if(msg.text == 'Kali'){
            bot.sendPhoto(msg.chat.id, 'https://www.zdnet.com/a/img/resize/7dbd141d8539f90a58afbbadf6a98fe8bded1c0e/2023/01/07/a07ea045-94e6-4c12-a2c9-5b8f06648141/2023-01-06-16-25-10.jpg?auto=webp&width=1280');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Kali-linux-2021.4-installer.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Kali-linux-2021.4-installer.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Kali-linux-2021.4-installer.part3.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Kali-linux-2021.4-installer.part4.zip');
        }
        if(msg.text == 'PureOs'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/tG0mO-gm32o/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware PureOS-9.0-gnome.zip');    
        }
        if(msg.text == 'Debian'){
            bot.sendPhoto(msg.chat.id, 'https://i0.wp.com/www.swhosting.com/blog/wp-content/uploads/2021/09/Post-2021-Debian-11.png?fit=1200%2C627&ssl=1');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Debian-11.0.0-amd64.zip');    
        }
        if(msg.text == 'CentOS'){
            bot.sendPhoto(msg.chat.id, 'https://blog.desdelinux.net/wp-content/uploads/2019/09/centos.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware CentOS-8-x86-64-boot-1905.zip');    
        }
        if(msg.text == 'Puppy'){
            bot.sendPhoto(msg.chat.id, 'https://pingvinus.ru/cr_images/modelImage/article/3035-teaser-puppy-linux-9.5.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware PuppyLinux x64-9.5.zip');    
        }
        if(msg.text == 'BlackLab'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/0JSnzSkadNo/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Blacklab-KDE-8-x86_64.zip');    
        }
        if(msg.text == 'Arch Linux'){
            bot.sendPhoto(msg.chat.id, 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Arch_Linux_Base_Neofetch_output.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware ArchLinux-2021.08.01.zip');    
        }
        if(msg.text == 'Slackware'){
            bot.sendPhoto(msg.chat.id, 'https://p4.wallpaperbetter.com/wallpaper/975/387/768/linux-slackware-technology-linux-hd-art-wallpaper-preview.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Slackware-14.2-install.part1.zip');    
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Slackware-14.2-install.part2.zip');    
        }
        if(msg.text == 'Solus'){
            bot.sendPhoto(msg.chat.id, 'https://blog.desdelinux.net/wp-content/uploads/2019/03/solus-4-linux.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Solus-4.3-Budgie.zip');    
        }
        if(msg.text == 'Bodhi Linux'){
            bot.sendPhoto(msg.chat.id, 'https://upload.wikimedia.org/wikipedia/commons/d/da/Bodhi-2016-10-29.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Bodhi-6.0.0-64.zip');    
        }
        if(msg.text == 'Xubuntu'){
            bot.sendPhoto(msg.chat.id, 'https://ubunlog.com/wp-content/uploads/2022/04/Xubuntu-22.04.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Xubuntu-22.04-desktop.zip');    
        }
        if(msg.text == 'Zorin Linux'){
            bot.sendPhoto(msg.chat.id, 'https://media.techtribune.net/uploads/2021/08/zorin-social.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Zorin-OS-16-Core-64.part1.zip');    
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Zorin-OS-16-Core-64.part2.zip');    
        }
        if(msg.text == 'PCLinuxOS'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/vt9CPC8boVo/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware PCLinuxOs64.part1.zip');    
            bot.sendDocument(msg.chat.id, './document/@ITSoftware PCLinuxOs64.part2.zip');    
        }
    })
    // ================================================================Linux BunsenLabsga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'BansenLabs'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'BansenLabs', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'x86'}, {text: 'amd64'}],
                        [{text: '🔙 Orqaga'}, {text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'x86'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/g6vwG3XEOX8/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware BunsebLabs-2.1-x86-cd.zip');
        }
        if(msg.text == 'amd64'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/CZKGVfkOFYY/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware BunsebLabs-2.1.zip');
        }
    })
    // ================================================================Linux Fedoraga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Fedora'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Fedora', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'loT'}, {text: 'Workstation'}],
                        [{text: '🔙 Orqaga'}, {text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'loT'){
            bot.sendPhoto(msg.chat.id, 'https://preview.redd.it/s8ddx5f7rs161.jpg?auto=webp&s=acbd43f35132faf66bee33abae8ec0c14858cc28');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Fedora-loT-loT-ostree-x86_64-34.zip');
        }
        if(msg.text == 'Workstation'){
            bot.sendPhoto(msg.chat.id, 'https://i.ebayimg.com/images/g/hPkAAOSwseljZbK2/s-l500.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Fedora-Workstation-Live.zip');
        }
    })
    // ================================================================ MacOSga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Mac OS'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/p86OIxJpWKo/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware MacOSX.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware MacOSX.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware MacOSX.part3.zip');
        }
        
    })
    // ================================================================ Android OS kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Android OS'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Android OS', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Android 9.0'}],
                        [{text: 'Prime OS'}],
                        [{text: 'Bliss OS'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Prime OS'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/NWIBcmudgpw/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware PrimeOS_standart_0.4.5_2.zip');
        }
        if(msg.text == 'Bliss OS'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/M54Z0kD_Pw4/sddefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware BlissOS_v15.zip');
        }
    })
    // ================================================================ Android 9.0 kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Android 9.0'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Android 9.0', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: '32 bit'}],
                        [{text: '64 bit'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == '32 bit'){
            bot.sendPhoto(msg.chat.id, 'https://cdn.afterdawn.fi/screenshots/normal/14288.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Android-x86-9.0-r2.zip');
        }
        if(msg.text == '64 bit'){
            bot.sendPhoto(msg.chat.id, 'https://static.filehorse.com/screenshots/desktop-enhancements/android-x86-screenshot-02.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Android-x86_64-9.0-r2.zip');
        }
    })
    // ===================================================== Windowsga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows', {
                reply_markup: JSON.stringify({
                    keyboard: [[{text: 'x 32'}, {text: 'x 64'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
    })
    // ================================================================ Windows x32 razryadiga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'x 32'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'x32', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Windows 10 | x32'}],
                        [{text: 'Windows 8 | x32'}, {text: 'Windows 7 | x32'}],
                        [{text: 'Windows Vista | x32'}],
                        [{text: 'Windows XP | x32'}, {text: 'Windows 98 | x32'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Windows Vista | x32'){
            bot.sendPhoto(msg.chat.id, 'https://www.partitionwizard.com/images/uploads/articles/2022/03/windows-vista-iso/windows-vista-iso-thumbnail.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_Vista_x86.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_Vista_x86.part2.zip');
        }
        if(msg.text == 'Windows 98 | x32'){
            bot.sendPhoto(msg.chat.id, 'https://winworldpc.com/res/img/screenshots/98-second-edition-56726ce21c0c1cd14bd979f5c56ad5ac-w98-2014-09-13-21-50-40.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_98_SE.zip');
        }
    })
    // ================================================================ Windows10 x32 razryadiga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows 10 | x32'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows 10 | x32', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: '1507'}, {text: '1511'}],
                        [{text: '1607'}, {text: '1703'}, {text: '1709'}],
                        [{text: '1803'}, {text: '1809'}],
                        [{text: '1903'}],
                        [{text: '1909'}, {text: '2004'}, {text: '20H2'}, {text: '21H1'}],
                        [{text: '21H2'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == '1507'){
            bot.sendPhoto(msg.chat.id, 'https://softcomputers.org/wp-content/uploads/2020/06/win10-1507-1024x428.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1507_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1507_Russian_x32.part2.zip');
        }
        if(msg.text == '1511'){
            bot.sendPhoto(msg.chat.id, 'https://cdn.redmondpie.com/wp-content/uploads/2015/11/windows-10-november-update.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1511_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1511_Russian_x32.part2.zip');
        }
        if(msg.text == '1607'){
            bot.sendPhoto(msg.chat.id, 'https://windows64.net/uploads/posts/2016-12/1481973277_101607.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1607_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1607_Russian_x32.part2.zip');
        }
        if(msg.text == '1703'){
            bot.sendPhoto(msg.chat.id, 'https://finalthought.org/wp-content/uploads/2017/04/Custom1703Hero-1.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1703_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1703_Russian_x32.part2.zip');
        }
        if(msg.text == '1709'){
            bot.sendPhoto(msg.chat.id, 'https://www.syxsense.com/wp-content/uploads/2022/06/Support-Ending-for-1709.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1709_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1709_Russian_x32.part2.zip');
        }
        if(msg.text == '1803'){
            bot.sendPhoto(msg.chat.id, 'https://occlub.ru/wp-content/uploads/2018/05/images_posts_news_2018_5_1_Windows-10-build-1803-1.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1803_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1803_Russian_x32.part2.zip');
        }
        if(msg.text == '1809'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/m_b5R8_wKDA/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1809_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1809_Russian_x32.part2.zip');
        }
        if(msg.text == '1903'){
            bot.sendPhoto(msg.chat.id, 'https://cdn.wccftech.com/wp-content/uploads/2019/10/install-windows-10-1903.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1903_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1903_Russian_x32.part2.zip');
        }
        if(msg.text == '1909'){
            bot.sendPhoto(msg.chat.id, 'https://cdn.neowin.com/news/images/uploaded/2019/10/1569947843_w10-1909-1_story.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1909_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1909_Russian_x32.part2.zip');
        }
        if(msg.text == '2004'){
            bot.sendPhoto(msg.chat.id, 'https://www.muycomputer.com/wp-content/uploads/2019/11/Windows10_versi%C3%B3n2004-1000x600.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_2004_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_2004_Russian_x32.part2.zip');
        }
        if(msg.text == '20H2'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/njxrVFS3RwU/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_20H2_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_20H2_Russian_x32.part2.zip');
        }
        if(msg.text == '21H1'){
            bot.sendPhoto(msg.chat.id, 'https://www.gizchina.com/wp-content/uploads/images/2021/02/Windows-10-21H1.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H1_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H1_Russian_x32.part2.zip');
        }
        if(msg.text == '21H2'){
            bot.sendPhoto(msg.chat.id, 'https://i.computer-bild.de/imgs/1/3/6/4/4/9/3/7/699573523_629af10fdb-dcc21248414c6a4a.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H2_Russian_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H2_Russian_x32.part2.zip');
        }
    })
    // ================================================================ Windows 8 x32 razryadiga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows 8 | x32'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows 8 | x32', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Professional | x32'}],
                        [{text: 'Enterprice | x32'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Professional | x32'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/Vp-fLHtm_yA/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Pro_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Pro_x32.part2.zip');
        }
        if(msg.text == 'Enterprice | x32'){
            bot.sendPhoto(msg.chat.id, 'https://i.pinimg.com/originals/81/61/51/81615153364c6d656fdba1017eb13e6d.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Enterprice_x86.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Enterprice_x86.part2.zip');
        }
    })
    // ================================================================ Windows 7 x32 razryadiga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows 7 | x32'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows 7 | x32', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Ultimate'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Ultimate'){
            bot.sendPhoto(msg.chat.id, 'https://www.bhphotovideo.com/images/images2500x2500/Microsoft_GLC_00701_Windows_7_Ultimate_32_bit_654852.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win7_Ultimate_sp1_x32.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win7_Ultimate_sp1_x32.part2.zip');
        }
    })
    // ================================================================ Windows XP x32 razryadiga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows XP | x32'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows XP | x32', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Professional'}],
                        [{text: 'Chip'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Professional'){
            bot.sendPhoto(msg.chat.id, 'https://noblefox.ru/wp-content/uploads/2017/07/Wxp.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows Xp Pro SP3_x32.zip');
        }
        if(msg.text == 'Chip'){
            bot.sendPhoto(msg.chat.id, 'https://best-soft.net/uploads/posts/2020-12/1609068046_4811_chip_windows_xp_ustanovka_s_usb_2014_final_32bit.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Chip_2014_Final.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Chip_2014_Final.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Chip_2014_Final.part3.zip');
        }
    })
    // ================================================================ Windows x64 razryadiga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'x 64'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'x64', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Windows 11'}, {text: 'Windows 10'}, {text: 'Windows 8'}],
                        [{text: 'Windows 7'}, {text: 'Windows Vista'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Windows Vista'){
            bot.sendPhoto(msg.chat.id, 'https://i.ytimg.com/vi/CGIlAWHY-R0/maxresdefault.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_Vista_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_Vista_x64.part2.zip');
        }
    })
    // ================================================================ Windows 11ga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows 11'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows 11', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Orginal obraz'}],
                        [{text: 'Windows 11 by SmokieBlahBlah'}],
                        [{text: 'Windows 11 21H2 by Tatata'}],
                        [{text: 'Windows 11 21H2 by OneSmile'}],
                        [{text: 'Windows 11 Compact&Full by Flibustier'}],
                        [{text: 'Windows 11 21H2 Pro Insider'}, {text: 'Windows 11 21H2 Rus GX'}],
                        [{text: 'Windows 11 21H2 by Ovgorskiy'}],
                        [{text: 'Windows 11 21H2 Enterprice by Zosma'}],
                        [{text: 'Windows 11 loT Enterprice by Xalex'}],
                        [{text: 'Windows 11 Pro 21H2 by OneSmile'}],
                        [{text: 'Windows 11 IP LTSC by Djannet'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Windows 11 by SmokieBlahBlah'){
            bot.sendPhoto(msg.chat.id, 'https://manshet.org/uploads/posts/2021-10/1633976258_4.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_RU_EN_16in1+x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_RU_EN_16in1+x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_RU_EN_16in1+x64.part3.zip');
        }
        if(msg.text == 'Windows 11 21H2 by Tatata'){
            bot.sendPhoto(msg.chat.id, 'https://www.windowslatest.com/wp-content/uploads/2021/06/Windows-11-preview-build.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_RU_EN_16in1+x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_RU_EN_16in1+x64.part2.zip');
        }
        if(msg.text == 'Windows 11 21H2 by OneSmile'){
            bot.sendPhoto(msg.chat.id, './img/Onasmile.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11 PRO 21H2 x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11 PRO 21H2 x64.part2.zip');
        }
        if(msg.text == 'Windows 11 Compact&Full by Flibustier'){
            bot.sendPhoto(msg.chat.id, 'https://pcprogs.net/uploads/posts/2022-01/1642796373_windows-11-21h2_22000_318-x64-compact-full-flibustier-logo.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware_22000_51_Compact_and_Full_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware_22000_51_Compact_and_Full_x64.part2.zip');
        }
        if(msg.text == 'Windows 11 21H2 Pro Insider'){
            bot.sendPhoto(msg.chat.id, 'https://www.elevenforum.com/data/covers/thread/o/11/11975.jpg?1673980656');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11 21H2 (Build).part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11 21H2 (Build).part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11 21H2 (Build).part3.zip');
        }
        if(msg.text == 'Windows 11 21H2 Rus GX'){
            bot.sendPhoto(msg.chat.id, 'https://insmac.org/uploads/posts/2021-06/1624958880_windows-11_01.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_PRO_Insider_22000.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_PRO_Insider_22000.part2.zip');
        }
        if(msg.text == 'Windows 11 21H2 by Ovgorskiy'){
            bot.sendPhoto(msg.chat.id, 'https://windowsbit.net/uploads/posts/2022-10/1665940965_win1.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_PRO_Sunvalley_22000.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_PRO_Sunvalley_22000.part2.zip');
        }
        if(msg.text == 'Windows 11 21H2 Enterprice by Zosma'){
            bot.sendPhoto(msg.chat.id, 'https://meterpreter.org/wp-content/uploads/2021/06/Window-11-Widget.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_Enterprice_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_Enterprice_x64.part2.zip');
        }
        if(msg.text == 'Windows 11 loT Enterprice by Xalex'){
            bot.sendPhoto(msg.chat.id, 'https://i0.wp.com/www.bvm.co.uk/wp-content/uploads/2022/02/Windows-11-Blog.jpg?resize=1024%2C576&ssl=1');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_loT_Enterprice_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_loT_Enterprice_x64.part2.zip');
        }
        if(msg.text == 'Windows 11 Pro 21H2 by OneSmile'){
            bot.sendPhoto(msg.chat.id, 'https://i0.wp.com/www.bvm.co.uk/wp-content/uploads/2022/02/Windows-11-Blog.jpg?resize=1024%2C576&ssl=1');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_PRO_21H2_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_PRO_21H2_x64.part2.zip');
        }
        if(msg.text == 'Windows 11 IP LTSC by Djannet'){
            bot.sendPhoto(msg.chat.id, 'https://gloudfoto.com/Skrinshoty/posts/2021-11/6.webp');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_IP_LTSC_V_21H2_10.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_IP_LTSC_V_21H2_10.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Windows_11_IP_LTSC_V_21H2_10.part3.zip');
        }
    })
    // ================================================================ Windows 10ga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows 10'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows 10', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: '1507 | x64'}, {text: '1511 | x64'}],
                        [{text: '1607 | x64'}, {text: '1703 | x64'}, {text: '1709 | x64'}],
                        [{text: '1803 | x64'}, {text: '1809 | x64'}],
                        [{text: '1903 | x64'}],
                        [{text: '1909 | x64'}, {text: '2004 | x64'}],
                        [{text: '20H2 | x64'}, {text: '21H1 | x64'}],
                        [{text: '21H2 | x64'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == '1507 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1507_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1507_Russian_x64.part2.zip');
        }
        if(msg.text == '1511 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1511_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1511_Russian_x64.part2.zip');
        }
        if(msg.text == '1607 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1607_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1607_Russian_x64.part2.zip');
        }
        if(msg.text == '1703 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1703_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1703_Russian_x64.part2.zip');
        }
        if(msg.text == '1709 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1709_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1709_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1709_Russian_x64.part3.zip');
        }
        if(msg.text == '1803 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1803_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1803_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1803_Russian_x64.part3.zip');
        }
        if(msg.text == '1809 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1809_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1809_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1809_Russian_x64.part3.zip');
        }
        if(msg.text == '1903 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1903_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1903_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1903_Russian_x64.part3.zip');
        }
        if(msg.text == '1909 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1909_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1909_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_1909_Russian_x64.part3.zip');
        }
        if(msg.text == '2004 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_2004_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_2004_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_2004_Russian_x64.part3.zip');
        }
        if(msg.text == '20H2 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_20H2_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_20H2_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_20H2_Russian_x64.part3.zip');
        }
        if(msg.text == '21H1 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H1_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H1_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H1_Russian_x64.part3.zip');
        }
        if(msg.text == '21H2 | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.internetmatters.org/wp-content/uploads/2018/01/windows-10-web-logo.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H2_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H2_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win10_21H2_Russian_x64.part3.zip');
        }
    })
     // ================================================================ Windows 8ga kirish
     bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows 8'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows 8', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Professional | x64'}],
                        [{text: 'Enterprice | x64'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Professional | x64'){
            bot.sendPhoto(msg.chat.id, 'https://i0.wp.com/allgoodkeys.com/wp-content/uploads/2022/02/windows-8.1-pro-2.png?fit=631%2C783&ssl=1');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Pro_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Pro_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Pro_x64.part3.zip');
        }
        if(msg.text == 'Enterprice | x64'){
            bot.sendPhoto(msg.chat.id, 'https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/uploads/2013/09/win81my_0.jpg?itok=KfVM0Ejz');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Enterprice_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win_8.1_Enterprice_x64.part2.zip');
        }
    })
    // ================================================================ Windows 7ga kirish
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Windows 7'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Windows 7', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Ultimate | x64'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Ultimate | x64'){
            bot.sendPhoto(msg.chat.id, 'https://softmany.com/wp-content/uploads/2019/10/windows-7-Ultimate-1024x640.jpg');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win7_Ultimate_sp1_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win7_Ultimate_sp1_x64.part2.zip');
        }
    })
    // =================================================== Orginal obrz
    bot.on("message",  msg => {
        const chatId = msg.chat.id
        if(msg.text == 'Orginal obraz'){
            if(orqaga.at(-1) != msg.text){
                orqaga.push(msg.text)
            }
            bot.sendMessage(chatId, 'Orginal obraz', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{text: 'Windows 11 Russian Pro 21H2'}],
                        [{text: '🔙 Orqaga'},{text: '🔝 Asosiy menu'}]
                    ],
                    resize_keyboard: true
                })
            })
        }
        if(msg.text == 'Windows 11 Russian Pro 21H2'){
            bot.sendPhoto(msg.chat.id, 'https://winobraz.net/uploads/posts/2022-05/1654013625_1652458969_win.png');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win11_Russian_x64.part1.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win11_Russian_x64.part2.zip');
            bot.sendDocument(msg.chat.id, './document/@ITSoftware Win11_Russian_x64.part3.zip');
            
        }
    })