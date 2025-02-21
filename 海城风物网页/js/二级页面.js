// function showRoleIntro(blockname) {
//     // 获取所有 intro 类型的 div
//     const introDivs = document.querySelectorAll('.intro');
//     // 遍历所有 intro 类型的 div
//     introDivs.forEach((div) => {
//         // 如果不是 role-intro 类型的 div，则隐藏
//         if (div.id!== blockname) {
//             div.style.display = 'none';
//         } else {
//             // 如果是 role-intro 类型的 div，则显示
//             div.style.display = 'block';
            
//         }

//     });

   
    
// }


function showRoleIntro(id) {
    console.log(id);
    ;
    // 隐藏所有介绍部分
    const intros = document.querySelectorAll('.intro');
    intros.forEach(intro => {
        intro.style.display = 'none';
    });

    // 显示指定的介绍部分
    const targetIntro = document.getElementById(id);
    if (targetIntro) {
        targetIntro.style.display = 'block';
    }

    // 改变导航栏的背景颜色
    const navItems = document.querySelectorAll('.nave > div');
    navItems.forEach(item => {
        // console.log(item.id);
        
        if (item.id === id.replace('-intro', '')) {
       
            
            item.style.backgroundColor = 'white';
            
        } else {
            console.log(item.id);
            item.style.backgroundColor = '#f2e4e4';

        }
    });


    
}

document.addEventListener('DOMContentLoaded', function() {
    // 页面加载完成后，只显示 role 部分
    const intros = document.querySelectorAll('.intro');
    intros.forEach(intro => {
        if (intro.id!== 'role-intro') {
            intro.style.display = 'none';
        } else {
            intro.style.display = 'block';
        }
    });

    const roleNavItems = document.querySelectorAll('.role-nave > div[id^="title-"]');
    const roleDetail = document.querySelector('.role-detail');

    roleNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const id = this.id.replace('title-', 'intro-');
            const introElement = document.getElementById(id);

            if (introElement) {
               

                // 滚动到 intro-xx 元素的位置
                introElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function click1(element){
    const navItems = document.querySelectorAll('.role-nave > div');
    
    navItems.forEach(item => {
        // console.log(item.id);
        // console.log(element.id);
        if (item.id === element.id) {
            item.style.backgroundColor = 'white';
            // console.log('1');
            
        } else {
    
            item.style.backgroundColor = '#f4f3f3';

        }
    });

}