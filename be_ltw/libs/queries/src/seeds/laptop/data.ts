import { PartialType } from '@nestjs/swagger'
import { Laptop } from '@app/queries/entities'

export class InsertLaptopDto extends PartialType(Laptop) {}

export const laptopData: InsertLaptopDto[] = [
    {
        name: 'Laptop Dell Vostro 3480-70183779/70187708',
        cpu: 'Core i5 8265U 1.6 Ghz up to 3.9Ghz-6Mb',
        ram: '8Gb',
        screen: '14.0Inch',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '1Tb/ DVDRW',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Dell Vostro 3480 70183779/70187708 mang đến hiệu năng mạnh mẽ và có tính di động cao, rất gọn nhẹ để bạn mang theo bên mình. Nếu bạn đang tìm kiếm một chiếc laptop phục vụ nhu cầu làm việc và độ bền cao thì Dell Vostro 3480 chính là lựa chọn bạn đang cần. ',
        pin: '4 cell',
        price: 13690000,
        sale: 0,
        material: 'Plastic',
        brand: 'Dell',
        quantity: 10,
        image: 'https://phucanhcdn.com/media/product/75_36360_inspiron_3580a_p75f106_h4.jpg',
    },
    {
        name: 'Laptop Dell Inspiron 3493 N4I5136W',
        cpu: 'Core i5 1035G1 1.0 Ghz up to 3.6Ghz-6Mb',
        ram: '4Gb',
        screen: '14.0Inch FHD',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '1Tb',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Inspiron 3493 N4I5136W được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại. Laptop có độ mỏng và thiết kế chắc chắn, trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 13290000,
        sale: 0,
        material: 'Plastic',
        brand: 'Dell',
        quantity: 20,
        image: 'https://phucanhcdn.com/media/product/75_35222_laptop_dell_vostro_3480_70183777_1_2.png',
    },
    {
        name: 'Laptop Dell Inspiron 3580A P75F106/P75F006',
        cpu: 'Core i3 8145U 2.1Ghz-4Mb',
        ram: '4Gb',
        screen: '15.6Inch Full HD',
        color: 'Silver',
        os: 'Windows 10 Home',
        storage: '1Tb/ DVDW',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Dell Inspiron 3580A P75F106 Silver được thiết kế mỏng nhẹ, thời trang giúp bạn dễ dàng mang theo mọi nơi và phù hợp với mọi môi trường học tập, làm việc.',
        pin: '4 cell',
        price: 13290000,
        sale: 0,
        material: 'Plastic',
        brand: 'Dell',
        quantity: 30,
        image: 'https://phucanhcdn.com/media/product/75_35222_laptop_dell_vostro_3480_70183777_1_4.png',
    },
    {
        name: 'Laptop Dell Inspiron 3481 70190294',
        cpu: 'Core i3 7020U 2.3Ghz-3Mb',
        ram: '4Gb',
        screen: '14.0Inch',
        color: 'Silver',
        os: 'Windows 10 Home',
        storage: '1Tb/ DVDRW',
        graphicCard: 'Radeon 520 2GB DDR5',
        description:
            'Laptop Dell Inspiron 3481 70190294 được thiết kế với kiểu dáng hiện đại và chắc chắn cùng kích thước 2.5 cm và trọng lượng chỉ 1.71 kg rất vừa vặn chứ không trở nên quá to với người dùng, nhờ vậy mà nó vô cùng thích hợp với những ai cần di chuyển nhiều, nhân viên văn phòng hay học sinh, viên bởi sự tiện lợi khi mang theo của nó.',
        pin: '4 cell',
        price: 10290000,
        sale: 0,
        material: 'Plastic',
        brand: 'Dell',
        quantity: 10,
        image: 'https://phucanhcdn.com/media/product/75_35222_laptop_dell_vostro_3480_70183777_1_3.png',
    },
    {
        name: 'Laptop Dell Gaming G5 5590M P82F001',
        cpu: 'Core i5 9300H 2.4Ghz Up to 4.1Ghz-8Mb',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '1Tb/ DVDW',
        graphicCard: 'Nvidia GTX1650 4Gb DDR5',
        description:
            'Laptop Dell Gaming G5 5590M P82F001 Silver với thiết kế nổi bật đậm chất gaming, cùng các đường vát cạnh làm tăng phần mạnh mẽ cho tổng thể máy. Máy nhỏ gọn cho phép bạn mang theo mọi nơi dễ dàng.',
        pin: '4 cell',
        price: 27490000,
        sale: 10,
        material: 'Plastic',
        brand: 'Dell',
        quantity: 10,
        image: 'https://phucanhcdn.com/media/product/75_36360_inspiron_3580a_p75f106_h2.jpg',
    },
    {
        name: 'Laptop Dell XPS 15-7590 70196707',
        cpu: 'Core i7 9750H(2.6GHz/12MB) up to 4.50 GHz',
        ram: '16Gb',
        screen: '15.6Inch Full HD',
        color: 'Silve',
        os: 'Windows 10 Home + Office 365',
        storage: '512Gb SSD',
        graphicCard: 'Nvidia GTX1650 4GB DDR5',
        description:
            'Laptop Dell XPS 15 7590 70196707 được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại, cao cấp. Laptop Dell mỏng, bền với trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '	6 cell',
        price: 43790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Dell',
        quantity: 10,
        image: 'https://phucanhcdn.com/media/product/75_36632_dell_vostro_3490_h3.jpg',
    },
    {
        name: 'Laptop Dell XPS 15-7590 70196711',
        cpu: 'Core i9 9980HK(2.4GHz/16MB) up to 5.0 GHz',
        ram: '32Gb',
        screen: '15.6Inch 4K TouchScreen',
        color: 'Silver',
        os: 'Windows 10 Home + Office 365',
        storage: '1Tb SSD',
        graphicCard: 'Nvidia GTX1650 4GB DDR5',
        description:
            'Laptop Dell XPS 15 7590 70196711 được thiết kế mỏng nhẹ, vỏ nhôm nguyên khối thời trang, kiểu dáng hiện đại, cao cấp. Laptop mỏng, bền với trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 66790000,
        sale: 10,
        material: 'Aluminum',
        brand: 'Dell',
        quantity: 10,
        image: 'https://phucanhcdn.com/media/product/75_37514_inspiron_3481_ha4.jpg',
    },
    {
        name: 'Laptop Asus Vivobook S530FA-BQ431T',
        cpu: 'Core i3 8145U 2.1Ghz-4Mb',
        ram: '4Gb',
        screen: '15.6Inch Full HD',
        color: 'Gold',
        os: 'Windows 10 Home',
        storage: '256GB SSD',
        graphicCard: 'Nvidia GTX1650 4GB DDR5',
        description:
            'Laptop Asus Vivobook S530FA-BQ431T được thiết kế mỏng nhẹ, vỏ nhôm nguyên khối thời trang, kiểu dáng hiện đại, cao cấp. Laptop mỏng, bền với trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '3 cell',
        price: 12790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Asus',
        quantity: 9,
        image: 'https://phucanhcdn.com/media/product/75_36651_inspiron_5593_h2ss.jpg',
    },
    {
        name: 'Laptop Asus A512FA-EJ1281T',
        cpu: 'Core i5 10210U 1.6Ghz-6Mb',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: 'Silver',
        os: 'Windows 10 Home',
        storage: '512GB SSD PCIe (M.2 2280)',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Asus A512FA-EJ1281T mỏng gọn nhất thế giới trong phân khúc và cũng là dòng laptop phổ thông đầu tiên được trang bị bộ nhớ siêu tốc dung lượng cao SSD PCIe 512GB. Được trang bị cấu hình tối ưu để giúp người dùng trẻ tăng tốc trong các tác vụ sáng tạo nội dung, giải trí đa phương tiện hay làm việc chuyên nghiệp mỗi ngày.',
        pin: '2 cell',
        price: 16290000,
        sale: 0,
        material: 'Plastic',
        brand: 'Asus',
        quantity: 8,
        image: 'https://phucanhcdn.com/media/product/75_36651_inspiron_5593_ha2.jpg',
    },
    {
        name: 'Laptop Asus FIFA QLT40XX',
        cpu: 'Core i5 8145U 2.1Ghz-4Mb',
        ram: '4Gb',
        screen: '15.6Inch Full HD',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '256GB SSD',
        graphicCard: 'Radeon GTX1650 4GB DDR5',
        description:
            'Laptop Asus FIFA QLT40XX được thiết kế mỏng nhẹ, vỏ nhôm nguyên khối thời trang, kiểu dáng hiện đại, cao cấp. Laptop mỏng, bền với trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 16790000,
        sale: 0,
        material: 'Plastic',
        brand: 'Asus',
        quantity: 7,
        image: 'https://phucanhcdn.com/media/product/75_37190_vostro_5590a_ha1.jpg',
    },
    {
        name: 'Laptop Asus Gaming Zephyrus S GL531GM-ES004T',
        cpu: 'Core i7 8750H 2.2Ghz-9Mb',
        ram: '16Gb',
        screen: '15.6Inch Full HD',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '512GB SSD',
        graphicCard: 'Nvidia GTX1060 6GB DDR5',
        description:
            'Siêu phẩm chơi game Asus Gaming Zephyrus S GL531GM-ES004T gây ấn tượng với người dùng bởi hiệu suất đáng kinh ngạc, vẻ ngoài hầm hố và có thể chiến mọi game chính là niềm ao ước của các game thủ khi sở hữu chiếc laptop này. ',
        pin: '2 cell',
        price: 53790000,
        sale: 0,
        material: 'Plastic',
        brand: 'Asus',
        quantity: 6,
        image: 'https://phucanhcdn.com/media/product/75_35813_laptop_asus_tuf_gaming_fx505dd_al186t__gun_metal__4.jpg',
    },
    {
        name: 'Laptop Asus Gaming GX531GW-ES006T',
        cpu: 'Core i7 8750H 2.2Ghz-9Mb',
        ram: '16Gb',
        screen: '15.6Inch Full HD',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '512GB SSD',
        graphicCard: 'Nvidia RTX2070 8GB DDR5',
        description:
            'Laptop Asus Gaming GX531GW-ES006T đã thiết lập nên một tiêu chuẩn mới cho dòng laptop gaming - sự mỏng nhẹ nhưng vẫn mang sức mạnh cần có của các mẫu máy thuộc phân khúc này. Các chuyên gia của Asus đã nghiên cứu và tìm ra được giải pháp để trung hòa giữa độ mỏng và sức mạnh trên Asus Gaming GX531GW-ES006T.',
        pin: '4 cell',
        price: 61790000,
        sale: 0,
        material: 'Metal',
        brand: 'Asus',
        quantity: 14,
        image: 'https://phucanhcdn.com/media/product/75_36240_laptop_apple_macbook_air_mqd32_1_3.png',
    },
    {
        name: 'Laptop Acer Aspire A515-54-54EU NX.HN3SV.002',
        cpu: 'Core i5 10210U 1.6Ghz Up to 4.2Ghz - 6Mb',
        ram: '16Gb',
        screen: '15.6Inch Full HD',
        color: ' Silver',
        os: 'Windows 10 Home',
        storage: '512Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Acer Aspire A515 54 54EU NX.HN3SV.002 có thiết kế tinh tế, chắc chắn. Trọng lượng máy khá nhẹ, mỏng giúp bạn dễ dàng mang đi mọi nơi.',
        pin: '4 cell',
        price: 15790000,
        sale: 0,
        material: 'Alumium',
        brand: 'Asus',
        quantity: 20,
        image: 'https://phucanhcdn.com/media/product/75_36046_laptop_msi_gf63_thin_9rcx_646vn__black__1_1.png',
    },
    {
        name: 'Laptop Acer Nitro series AN515 43 R84R NH.Q5XSV.001',
        cpu: 'Core i5 10210U 1.6Ghz Up to 4.2Ghz - 6Mb',
        ram: '16Gb',
        screen: '15.6Inch Full HD',
        color: ' Silver',
        os: 'Windows 10 Home',
        storage: '512Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Acer Nitro series AN515 43 R84R NH.Q5XSV.001 có thiết kế tinh tế, chắc chắn. Trọng lượng máy khá nhẹ, mỏng giúp bạn dễ dàng mang đi mọi nơi.',
        pin: '4 cell',
        price: 25790000,
        sale: 0,
        material: 'Alumium',
        brand: 'Asus',
        quantity: 12,
        image: 'https://phucanhcdn.com/media/product/75_37571_laptop_msi_gaming_gf75_thin_9sc_477vn_5.jpg',
    },
    {
        name: 'Laptop Acer Swift 3 SF314 56G 78QS NX.HAQSV.001',
        cpu: 'Core i5 10210U 1.6Ghz Up to 4.2Ghz - 6Mb',
        ram: '16Gb',
        screen: '15.6Inch Full HD',
        color: ' Silver',
        os: 'Windows 10 Home',
        storage: '512Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Acer Swift 3 SF314 56G 78QS NX.HAQSV.001 có thiết kế tinh tế, chắc chắn. Trọng lượng máy khá nhẹ, mỏng giúp bạn dễ dàng mang đi mọi nơi.',
        pin: '4 cell',
        price: 35790000,
        sale: 0,
        material: 'Alumium',
        brand: 'Asus',
        quantity: 11,
        image: 'https://phucanhcdn.com/media/product/75_36240_laptop_apple_macbook_air_mqd32_1_3.png',
    },
    {
        name: 'Laptop Acer Aspire A315 54 368N NX.HM2SV.004',
        cpu: 'Core i5 10210U 1.6Ghz Up to 4.2Ghz - 6Mb',
        ram: '16Gb',
        screen: '15.6Inch Full HD',
        color: ' Silver',
        os: 'Windows 10 Home',
        storage: '512Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Acer Aspire A315 54 368N NX.HM2SV.004 có thiết kế tinh tế, chắc chắn. Trọng lượng máy khá nhẹ, mỏng giúp bạn dễ dàng mang đi mọi nơi.',
        pin: '4 cell',
        price: 15790000,
        sale: 0,
        material: 'Alumium',
        brand: 'Asus',
        quantity: 10,
        image: 'https://phucanhcdn.com/media/product/75_36242_laptop_apple_macbook_pro_muhn2_128gb__2019___space_gray___touch_bar_1_1.png',
    },
    {
        name: 'Laptop Acer Nitro series AAN515 54 595D NH.Q59SV.025',
        cpu: 'Core i5 10210U 1.6Ghz Up to 4.2Ghz - 6Mb',
        ram: '16Gb',
        screen: '15.6Inch Full HD',
        color: ' Silver',
        os: 'Windows 10 Home',
        storage: '512Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Acer Nitro series AAN515 54 595D NH.Q59SV.025 có thiết kế tinh tế, chắc chắn. Trọng lượng máy khá nhẹ, mỏng giúp bạn dễ dàng mang đi mọi nơi.',
        pin: '4 cell',
        price: 18790000,
        sale: 0,
        material: 'Alumium',
        brand: 'Asus',
        quantity: 10,
        image: 'https://phucanhcdn.com/media/product/75_37571_laptop_msi_gaming_gf75_thin_9sc_477vn_1.jpg',
    },
    {
        name: 'Laptop Apple Macbook Air MQD32 SA/A 128Gb',
        cpu: 'Core i5 1.8GHz',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: ' Silver',
        os: 'Mac OS X',
        storage: '128Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Apple Macbook Air MQD32 SA/A 128Gb (2017) (Silver) có thiết kế tối giản nhưng không kém phần sang trọng. Toàn thân máy được gia công từ nhôm nguyên khối một cách tỉ mỉ và chính xác, tạo nên vẻ liền lạc và chắc chắn lại vừa thanh thoát, sang trọng.',
        pin: '4 cell',
        price: 18790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Apple',
        quantity: 9,
        image: 'https://phucanhcdn.com/media/product/75_36240_laptop_apple_macbook_air_mqd32_1_3.png',
    },
    {
        name: 'Laptop Apple Macbook Air MVFK2 128Gb',
        cpu: 'Core i5 1.8GHz',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: ' Silver',
        os: 'Mac OS X',
        storage: '128Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'LLaptop Apple Macbook Air MVFK2 128Gb (2017) (Silver) có thiết kế tối giản nhưng không kém phần sang trọng. Toàn thân máy được gia công từ nhôm nguyên khối một cách tỉ mỉ và chính xác, tạo nên vẻ liền lạc và chắc chắn lại vừa thanh thoát, sang trọng.',
        pin: '4 cell',
        price: 38790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Apple',
        quantity: 8,
        image: 'https://phucanhcdn.com/media/product/75_36587_acer_aspire_a315_42_ha3.jpg',
    },
    {
        name: 'Laptop Apple Macbook Air MVFM2 128Gb',
        cpu: 'Core i5 1.8GHz',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: ' Silver',
        os: 'Mac OS X',
        storage: '128Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Apple Macbook Air MVFM2 128Gb (2017) (Silver) có thiết kế tối giản nhưng không kém phần sang trọng. Toàn thân máy được gia công từ nhôm nguyên khối một cách tỉ mỉ và chính xác, tạo nên vẻ liền lạc và chắc chắn lại vừa thanh thoát, sang trọng.',
        pin: '4 cell',
        price: 28790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Apple',
        quantity: 7,
        image: 'https://phucanhcdn.com/media/product/75_34932_laptop_lenovo_thinkpad_l390_20nrs00100_1_1.jpg',
    },
    {
        name: 'Laptop Apple Macbook Pro MVVM2 SA/A 1Tb',
        cpu: 'Core i9 9880H 2.3GHz',
        ram: '16Gb',
        screen: '16.0Inch',
        color: 'Silver',
        os: 'Mac OS X',
        storage: '1Tb SSD',
        graphicCard: 'Radeon Pro 5500M',
        description:
            'Macbook luôn biết cách làm hài lòng người dùng trung thành của mình với những phiên bản Macbook pro cấu hình mạnh mẽ, thiết kế tinh tế, sang trọng. Với Laptop Apple Macbook Pro MVVM2, người dùng sẽ được trải nghiệm trên một chiếc máy tính xách tay đáng mua nhất năm 2020 này.',
        pin: '4 cell',
        price: 67890000,
        sale: 10,
        material: 'Aluminum',
        brand: 'Apple',
        quantity: 6,
        image: 'https://phucanhcdn.com/media/product/75_35599_laptop_asus_a412fa_ek377t__silver__1_2.png',
    },
    {
        name: 'Laptop Apple Macbook Pro MUHN2 128Gb',
        cpu: 'Core i5 1.8GHz',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: 'Grey',
        os: 'Mac OS X',
        storage: '128Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Apple Macbook Pro MUHN2 128Gb (2017) (Silver) có thiết kế tối giản nhưng không kém phần sang trọng. Toàn thân máy được gia công từ nhôm nguyên khối một cách tỉ mỉ và chính xác, tạo nên vẻ liền lạc và chắc chắn lại vừa thanh thoát, sang trọng.',
        pin: '4 cell',
        price: 38790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Apple',
        quantity: 12,
        image: 'https://phucanhcdn.com/media/product/75_36046_laptop_msi_gf63_thin_9rcx_645vn__black__3.jpg',
    },
    {
        name: 'Laptop Lenovo V130 14IKB 81HQ00U2VN',
        cpu: 'Celeron 3867U 1.8Ghz-2Mb',
        ram: '4Gb',
        screen: '14.0Inch',
        color: 'Grey',
        os: 'Windows 10 Home',
        storage: '256Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Lenovo V130 14IKB 81HQ00U2VN được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại. Laptop Lenovo có độ mỏng và thiết kế chắc chắn, trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 6390000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Lenovo',
        quantity: 30,
        image: 'https://phucanhcdn.com/media/product/75_35813_laptop_asus_tuf_gaming_fx505dd_al186t__gun_metal__4.jpg',
    },
    {
        name: 'Laptop Lenovo X130 15IKB 80HQ00U2VN',
        cpu: 'Celeron 3867U 1.8Ghz-2Mb',
        ram: '4Gb',
        screen: '14.0Inch',
        color: 'Grey',
        os: 'Windows 10 Home',
        storage: '256Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Lenovo X130 15IKB 80HQ00U2VN được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại. Laptop Lenovo có độ mỏng và thiết kế chắc chắn, trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 12390000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Lenovo',
        quantity: 23,
        image: 'https://phucanhcdn.com/media/product/75_36136_ideapad_s340_15iwl_81n800evvn_h1.jpg',
    },
    {
        name: 'Laptop Lenovo Ideapad S340 15API 81NC00G8VN',
        cpu: 'Celeron 3867U 1.8Ghz-2Mb',
        ram: '4Gb',
        screen: '14.0Inch',
        color: 'Grey',
        os: 'Windows 10 Home',
        storage: '256Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Lenovo Ideapad S340 15API 81NC00G8VN được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại. Laptop Lenovo có độ mỏng và thiết kế chắc chắn, trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 25390000,
        sale: 0,
        material: 'Plastic',
        brand: 'Lenovo',
        quantity: 2,
        image: 'https://phucanhcdn.com/media/product/75_36046_laptop_msi_gf63_thin_9rcx_645vn__black__1.jpg',
    },
    {
        name: 'Laptop Lenovo Thinkpad L380 20M5S01500',
        cpu: 'Celeron 3867U 1.8Ghz-2Mb',
        ram: '4Gb',
        screen: '14.0Inch',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '256Gb SSD',
        graphicCard: 'Intel Graphics HD 620',
        description:
            'Laptop Lenovo Thinkpad L380 20M5S01500 được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại. Laptop Lenovo có độ mỏng và thiết kế chắc chắn, trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 17790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'Lenovo',
        quantity: 14,
        image: 'https://phucanhcdn.com/media/product/75_36242_laptop_apple_macbook_pro_muhn2_128gb__2019___space_gray___touch_bar_1_1.png',
    },
    {
        name: 'Laptop MSI GF63 Thin 9RCX 646VN',
        cpu: 'Core i5 9300H 2.4Ghz-8MB',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '512GB SSD',
        graphicCard: 'NVIDIA GTX1050 TI 4GB DDR5',
        description:
            'Laptop MSI GF63 Thin 9RCX 646VN được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại. Laptop Lenovo có độ mỏng và thiết kế chắc chắn, trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 28790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'MSI',
        quantity: 11,
        image: 'https://phucanhcdn.com/media/product/75_36587_acer_aspire_a315_42_ha1.jpg',
    },
    {
        name: 'Laptop MSI GF63 Thin 9SC 071VN',
        cpu: 'Core i5 9300H 2.4Ghz-8MB',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '512GB SSD',
        graphicCard: 'NVIDIA GTX1050 TI 4GB DDR5',
        description:
            'Laptop MSI GF63 Thin 9SC 071VN được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại. Laptop Lenovo có độ mỏng và thiết kế chắc chắn, trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 27790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'MSI',
        quantity: 8,
        image: 'https://phucanhcdn.com/media/product/75_36587_acer_aspire_a315_42_ha1.jpg',
    },
    {
        name: 'Laptop MSI Gaming GF63 Thin 9SC 1031VN',
        cpu: 'Core i5 9300H 2.4Ghz-8MB',
        ram: '8Gb',
        screen: '15.6Inch Full HD',
        color: 'Black',
        os: 'Windows 10 Home',
        storage: '512GB SSD',
        graphicCard: 'NVIDIA GTX1050 TI 4GB DDR5',
        description:
            '25.790.000 được thiết kế mỏng nhẹ, thời trang, kiểu dáng hiện đại. Laptop Lenovo có độ mỏng và thiết kế chắc chắn, trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải trí,...',
        pin: '4 cell',
        price: 25790000,
        sale: 0,
        material: 'Aluminum',
        brand: 'MSI',
        quantity: 25,
        image: 'https://phucanhcdn.com/media/product/75_36632_dell_vostro_3490_h3.jpg',
    },
]