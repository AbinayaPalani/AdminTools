Feature: Asset Price change

    @UpdateAssetPriceWithSubmit
    Scenario: Change the asset price for a customer

        Given Open the admin tool
        When check the AssetPrice section is present
        Then select the AssetPrice section
        And Check whether asset is present or not and then update the asset price
        Then submit the process for asset price change

@UpdateAssetPriceWithCancel
  Scenario: Change the asset price for a customer and then cancel the update

        Given Open the admin tool
        When check the AssetPrice section is present
        Then select the AssetPrice section
        And Check whether asset is present or not and then update the asset price
        Then cancel the process for asset price change