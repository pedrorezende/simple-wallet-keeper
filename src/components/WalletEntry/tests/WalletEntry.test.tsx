import React from "react";
import { WalletEntry, WalletEntryProps } from "../WalletEntry";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithRedux } from "utils/renderWithRedux";
import { removeWallet } from "store/keyring";

const walletFunds = "100 tBNB";
jest.mock("hooks/useWalletFunds", () => ({
  useWalletFunds: () => walletFunds,
}));

const removeWalletMock = jest.fn();
jest.mock("store/hooks", () => ({
  useAppDispatch: () => {
    return removeWalletMock;
  },
}));

describe("<WalletEntry />", () => {
  let props: WalletEntryProps;

  beforeEach(() => {
    props = {
      address: "wallet-address",
      canDelete: true,
      encryptedWallet: "...",
    };

    window.confirm = jest.fn().mockImplementation(() => true);
  });

  it("should display wallet address", () => {
    render(renderWithRedux(<WalletEntry {...props} />));
    expect(screen.getByText(props.address)).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });

  it("should not display remove button", () => {
    render(renderWithRedux(<WalletEntry {...props} canDelete={false} />));
    expect(screen.queryByText("common:delete_wallet")).not.toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });

  it("should display balance and handle empty values", () => {
    render(renderWithRedux(<WalletEntry {...props} />));
    expect(screen.getByText(walletFunds)).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });

  it("should call wallet removal", () => {
    render(renderWithRedux(<WalletEntry {...props} />));
    const deleteButton = screen.getByText("common:delete_wallet");
    fireEvent.click(deleteButton);
    expect(removeWalletMock).toHaveBeenCalledWith(removeWallet(props.address));
    expect(screen).toMatchSnapshot();
  });

  it("should display primary key panel", async () => {
    render(renderWithRedux(<WalletEntry {...props} />));
    const viewButton = screen.getByText("common:view_primary_key");
    viewButton.click();
    expect(
      await screen.findByText("private_key_instructions", { exact: false })
    );
    expect(screen).toMatchSnapshot();
  });
});
