"use client";
export const customPagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
        return `<span class="${className}">
        </span>`;
    },
};
