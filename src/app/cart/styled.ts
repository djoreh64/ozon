"use client";

import Button from "@components/button";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 26px;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-top: 12px;
  }
`;

export const Headline = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: fit-content;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.textLighter};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.base};
  flex: 1;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const Delivery = styled.div`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  border-radius: 12px;
  background-color: #f5f7fa;
  padding: 18px;
`;

export const Good = styled.div`
  display: grid;
  grid-template-areas: "main price quantity";
  grid-template-columns: 3fr 1fr 2fr;
  align-items: center;
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-areas:
      "main main"
      "price quantity";
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

export const GoodMain = styled.div`
  grid-area: main;
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const GoodPriceHolder = styled.div`
  grid-area: price;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-self: start;
  }
`;

export const GoodQuantity = styled.div`
  grid-area: quantity;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;

  @media (max-width: 768px) {
    justify-self: end;
  }
`;

export const GoodImageHolder = styled(Link)`
  width: 77px;
  height: 77px;
  border-radius: 12px;
`;

export const GoodImage = styled(Image)`
  border-radius: 12px;
  object-fit: cover;
`;

export const GoodInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const GoodName = styled.div`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const GoodActions = styled.div`
  display: flex;
  gap: 12px;
`;

export const GoodActionsItem = styled.button<{ $inFavourites?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${({ $inFavourites, theme }) =>
    $inFavourites ? theme.colors.errorLighter : "#f5f7fa"};
  border: none;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${({ theme, $inFavourites }) =>
      $inFavourites ? "rgba(255, 23, 93, 0.1)" : "rgb(232, 236, 240)"};
  }

  &:active {
    transform: scale(0.9);
  }

  svg,
  path {
    transition: 0.1s ease-out;
  }
`;

export const GoodPrice = styled.div`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.success};
`;

export const GoodOldPrice = styled.div`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
`;

export const GoodQuantityButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;

export const GoodQuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-out;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLighter};

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    svg {
      stroke: ${({ theme }) => theme.colors.textLight};
    }
  }
`;

export const GoodQuantityInputHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 32px;
`;

export const GoodQuantityInput = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.textLighter};
  outline: none;
  border-radius: 6px;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
`;

export const GoodQuantityTotal = styled.div`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
`;

export const GoodActionsItemIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: #f5f7fa;
`;

export const GoodTotal = styled.div`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
`;

export const GoodQuantityButtonsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.success};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const BuyBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.colors.textLighter};
`;

export const BuyBlockItem = styled.dl`
  display: flex;
  justify-content: space-between;
  margin: 0;
  gap: 12px;
`;

export const BuyBlockItemTitle = styled.dt`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
`;

export const BuyBlockItemText = styled.dd<{ $sale?: boolean }>`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $sale }) => ($sale ? "#F91155" : "#637381")};
`;

export const BuyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  gap: 12px;
`;

export const BuyHeaderTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

export const BuyHeaderText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #637381;
`;

export const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 520px;
  margin: 0 auto;
  min-height: 80vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EmptyHeadline = styled.h3`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const EmptyButton = styled(Button)`
  border-radius: 12px;
  font-size: 18px;
  margin-top: 12px;
  padding: 12px 24px;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.base};
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const EmptyDescription = styled.p`
  margin: 0;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textLight};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
