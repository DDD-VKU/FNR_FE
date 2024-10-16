import { useState } from 'react';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 5; //thay dổi theo dữ liệu

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

}
export default Pagination;