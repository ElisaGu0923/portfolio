import React from 'react';
import './personal_info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function PersonalInfo() {
    return (
        <div className='personal_info_container'>
            <div className='top'>
                <img id='profile' src={require('../../assets/profile.jpeg')} alt='avatar'></img>
                <p className='name'>Elisa Gu</p>
                <p className='title'>Full-stack Developer</p>
                <p className='title'>Software & Unity Game</p>
            </div>
            <div className='middle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure culpa deserunt, quis fugiat sequi distinctio consequatur quos vitae recusandae, dolor labore odit? Minus laborum quidem tenetur dolor sint molestias velit sequi omnis facilis quae corrupti distinctio, totam mollitia ratione dicta esse architecto, deleniti deserunt, ducimus saepe! Laborum at soluta tempora fuga sunt possimus debitis, odio, aliquid reprehenderit doloremque aliquam, eligendi nisi voluptas voluptatum deleniti totam pariatur officia velit placeat animi. Doloremque expedita repellat iste explicabo dolorem vero debitis blanditiis, id eligendi nemo assumenda quo delectus corporis recusandae numquam vel, fuga optio voluptas reiciendis sapiente totam distinctio. Omnis consequatur sunt sed sint consectetur eum fugiat impedit debitis quis magnam, tempora architecto corrupti, voluptate quod reprehenderit praesentium et adipisci ipsa atque eaque ipsum. Quis ad dicta explicabo velit aliquam ea, quas iusto aliquid consequatur impedit! Dolores nobis minus expedita fugiat nesciunt nemo distinctio blanditiis error earum architecto doloremque explicabo tempore doloribus delectus iusto, nisi ipsam asperiores quam magni facilis quibusdam ullam ratione. Aut accusamus inventore sapiente molestias nam similique distinctio cumque odit doloribus quod repellendus autem atque ea, totam consectetur nulla nisi, quos nobis quo est iusto delectus magni saepe veniam. Veniam perspiciatis odio neque voluptas, aliquid omnis, accusantium reprehenderit, facere alias adipisci fugit nisi. Mollitia provident doloribus eligendi reprehenderit voluptatibus delectus explicabo recusandae distinctio tempora quidem ad fugiat aperiam, expedita inventore quaerat vel! Vel dolore assumenda optio molestias placeat eveniet, explicabo facilis sapiente ducimus vitae suscipit similique laboriosam fugiat illo ab expedita? Quidem iste veniam ex magnam voluptatem maxime sed porro, assumenda ipsam! Doloremque numquam laudantium, quia suscipit necessitatibus, at quasi obcaecati modi recusandae adipisci sunt ullam voluptatibus perspiciatis vel. Error nesciunt culpa voluptate commodi. Quas eligendi architecto, magni iusto tenetur, iste nobis sit ab dolore quam similique sint maxime dignissimos dolores necessitatibus error illum non itaque molestiae, molestias odio pariatur assumenda. Quis odio, nam eveniet fuga veniam maiores doloribus architecto? Voluptas, consequatur vel totam quasi sapiente sequi nisi eos exercitationem obcaecati ratione modi id quos ipsum fugiat voluptatem fuga pariatur minus reprehenderit voluptate voluptatibus iste soluta eius, corrupti aspernatur. Alias molestiae hic dolorum ad amet, odit dolor tempora minima impedit accusamus nulla autem voluptates corrupti earum iste quos aliquid nesciunt! Cumque dolores delectus itaque eius fugit similique rerum, non hic laudantium! Praesentium ipsa, vero vel quibusdam mollitia tempore nesciunt voluptatum officiis, adipisci illum perferendis iusto possimus natus commodi aliquam! Eaque repellat laborum commodi maxime, quod obcaecati amet ex quo earum eos. Ratione sit suscipit praesentium accusamus, eos, maiores omnis, libero at laboriosam inventore odit alias provident necessitatibus rerum explicabo nobis exercitationem velit natus distinctio enim magni. Blanditiis voluptate ducimus dolore mollitia temporibus ab commodi culpa voluptates aperiam dolores enim qui quod iste, similique eveniet accusantium sint. Magnam aliquam quia soluta quam aut! Vero hic sint repellat magnam labore totam laudantium. Perspiciatis tempore vel nemo reprehenderit pariatur nihil adipisci? Placeat quam laudantium ipsa voluptas beatae, atque ex quisquam ab. Quae dolor repudiandae id possimus dignissimos dolorem molestias tempora totam exercitationem, aspernatur placeat consequatur harum ut omnis quidem maiores earum debitis.</div>
            <div className='footer'>
                <a href='https://google.com' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href='https://google.com' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default PersonalInfo;
